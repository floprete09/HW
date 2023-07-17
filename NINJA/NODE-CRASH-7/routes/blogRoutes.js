const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();

router.get('/create', blogController.blog_create_get);
router.get('/', blogController.blog_index);
router.post('/', blogController.blog_create_post);
router.get('/:id', blogController.blog_details);
router.delete('/:id', blogController.blog_delete);



// blog routes
// router.use('/blogs', blogRoutes);
router.get('/create', (req, res) => {
    
  });
  
  router.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
      .then(result => {
        res.render('index', { blogs: result, title: 'All blogs' });
      })
      .catch(err => {
        console.log(err);
      });
  });

  router.get('/create',(req, res)=>{
    res.render('create',{title: 'Create a new Blog'});
  })
  
  router.post('/', (req, res) => {
    // console.log(req.body);
    
  });
  
  
  
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
  
    Blog.findById(id)
      .then(result => {
        res.render('details', { blog: result, title: 'Blog Details' });
      })
      .catch(err => {
        console.log(id);
      });
  });
  
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    
 
  });
  module.exports = router;