const { qcms, addQcm } = require('../models/inmemory');

const displayQcms = (req, res) => {
    res.render('qcms', { qcms });
};

const displayQcmDetailed = (req, res) => {
    const id = Number(req.params.qcmid);
    const qcm = qcms.find((element) => element.id === id);
    res.render('qcm', { qcm });
};

const displayQcmJson = (req, res) => {
    res.json({ qcms });
};

const displayFormQcm = (req, res) => {
    res.render('newqcm');
};

const createNewForm = (req, res) => {
    const { name, subject, nbpoints } = req.body;

    if (!name || !subject || !nbpoints) {
        return res.status(400).send('All fields are required.');
    }

    addQcm({
        name,
        subject,
        nbpoints,
    });

    res.redirect('/qcms');
};

module.exports = {
    displayQcms,
    displayFormQcm,
    createNewForm,
    displayQcmJson,
    displayQcmDetailed,
};
