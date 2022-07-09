const homeView = (req, res) => {
    res.render('pages/home', {
        pageTitle: 'Home'
    });
};

const contactView = (req, res) => {
    res.render('pages/contact', {
        pageTitle: 'Contact'
    });
};

const blogsView = (req, res) => {
    res.render('pages/blogs');
};

module.exports = {
    homeView,
    contactView,
    blogsView
}