const Qcm = require('./qcm');

const qcms = [
  new Qcm({
    id: 0,
    name: 'Introduction Vanilla JS',
    nbpoints: 20,
    subject: 'Javascript',
  }),
  new Qcm({
    id: 1,
    name: 'Framework Frontend',
    nbpoints: 20,
    subject: 'Angular',
  }),
  new Qcm({
    id: 2,
    name: 'Framework Backend',
    nbpoints: 10,
    subject: 'Express',
  }),
];

const addQcm = (rawObject) => {
  let maxId = 0;
  qcms.forEach((qcm) => {
    if (maxId < qcm.id) { // if (maxId < qcm.id) maxId = qcm.id;
      maxId = qcm.id;
    }
  });

  const qcm = new Qcm({
    id: maxId + 1,
    name: rawObject.name,
    subject: rawObject.subject,
    nbpoints: Number(rawObject.nbpoints),
  });

  qcms.push(qcm);
};

module.exports = { qcms, addQcm };
