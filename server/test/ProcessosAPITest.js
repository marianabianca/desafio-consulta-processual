const Processo = require("../models/Processo");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
var mongoose = require('mongoose');

chai.should();
chai.use(chaiHttp);

const processoObj = {
  cnj: "5001682-88.2020.8.13.0007",
  autor: "Autor",
  reu: "Reu",
  tribunalOrigem: "Tribunal",
  dataInicial: "20/02/2020",
  movimentacoes: [
    {
      data: "20/02/2020",
      descricao: "descrição"
    }
  ]
}

describe("Processos", () => {
  before(function (done) {
    this.timeout(3000);
    setTimeout(done, 2000);
  });
  beforeEach((done) => {
    Processo.deleteMany({}, (_) => {
      done();
    });
  });
  describe("/GET processos", () => {
    it("it should GET all the processos", (done) => {
      chai
        .request(app)
        .get("/processos")
        .end((_, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("array");
          res.body.data.length.should.be.eql(0);
          done();
        });
    });
  });
  describe("/GET/tribunal/:id processos", () => {
    it("it should GET all processos by tribunal", (done) => {
      let processo1 = new Processo(processoObj);
      let processo2 = new Processo({
        ...processoObj,
        cnj: "5001682-88.2020.8.13.0008",
        tribunalOrigem: "Tribunal 2"
      });
      processo1.save()
      processo2.save()
      chai
        .request(app)
        .get(`/processos/tribunal/${processo2.tribunalOrigem}`)
        .end((_, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("array");
          res.body.data.length.should.be.eql(1);
          done();
        });
    });
  })
  describe("/GET/cnj/:id processo", () => {
    it("it should GET a processo by CNJ", (done) => {
      let processo1 = new Processo(processoObj);
      let processo2 = new Processo({
        ...processoObj,
        cnj: "5001682-88.2020.8.13.0008"
      });
      processo1.save()
      processo2.save()
      chai
        .request(app)
        .get(`/processos/cnj/${processo1.cnj}`)
        .end((_, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("object");
          res.body.status.should.be.eql("success");
          done();
        });
    });
  })
  describe("/POST processo", () => {
    it("it should POST a new processo", (done) => {
      chai
        .request(app)
        .post("/processos")
        .send(processoObj)
        .end((_, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("object");
          res.body.status.should.be.eql("success");
          done();
        });
    });
    it("it should not POST a new processo", (done) => {
      // Try to create a process with an existing cnj
      let processo = new Processo(processoObj);
      processo.save()
      chai
        .request(app)
        .post("/processos")
        .send(processoObj)
        .end((_, res) => {
          res.should.have.status(409);
          res.body.error.should.be.eql("Processo com mesmo CNJ já existe");
          done();
        });
    });
  });
  describe("/GET/:id processo", () => {
    it("it should GET a processo by the id", (done) => {
      let processo = new Processo(processoObj);
      processo.save();
      chai
        .request(app)
        .get("/processos/" + processo.id)
        .end((_, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("object");
          res.body.status.should.be.eql("success");
          done();
        });
    });
    it("it should not GET a processo given a not found id", (done) => {
      let processo = new Processo(processoObj);
      let idNotFound = mongoose.Types.ObjectId();
      processo.save()
      chai
        .request(app)
        .get("/processos/" + idNotFound)
        .end((_, res) => {
          res.should.have.status(404);
          res.body.error.should.be.eql("Processo não encontrado");
          done();
        });
    });
  });
  describe("/PUT/:id processo", () => {
    it("it should UPDATE a processo given the id", (done) => {
      let processo = new Processo(processoObj);
      let processoUpdate = { reu: "Novo reu" }
      processo.save((_, processo) => {
        chai
          .request(app)
          .put("/processos/" + processo.id)
          .send(processoUpdate)
          .end((_, res) => {
            res.should.have.status(200);
            res.body.data.should.be.a("object");
            res.body.status.should.be.eql("success");
            res.body.data.autor.should.be.eql(processo.autor);
            res.body.data.reu.should.be.eql(processoUpdate.reu);
            done();
          });
      });
    });
    it("it should not UPDATE a processo given a not found id", (done) => {
      let processo = new Processo(processoObj);
      let idNotFound = mongoose.Types.ObjectId();
      let processoUpdate = { reu: "Novo reu" }
      processo.save((_, processo) => {
        chai
          .request(app)
          .put("/processos/" + idNotFound)
          .send(processoUpdate)
          .end((_, res) => {
            res.should.have.status(404);
            res.body.error.should.be.eql("Processo não encontrado");
            done();
          });
      });
    });
  });
  describe("/DELETE/:id processo", () => {
    it("it should DELETE a processo given the id", (done) => {
      let processo = new Processo(processoObj);
      processo.save((_, processo) => {
        chai
          .request(app)
          .delete("/processos/" + processo.id)
          .end((_, res) => {
            res.should.have.status(200);
            res.body.data.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
    it("it should not DELETE a processo given a not found id", (done) => {
      let processo = new Processo(processoObj);
      let idNotFound = mongoose.Types.ObjectId();
      processo.save((_, processo) => {
        chai
          .request(app)
          .delete("/processos/" + idNotFound)
          .end((_, res) => {
            res.should.have.status(404);
            res.body.error.should.be.eql("Processo não encontrado");
            done();
          });
      });
    });
  });
});