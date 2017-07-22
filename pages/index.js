import Layout from '../layouts/default'

export default (props) => (
  <Layout path={props.url.pathname}>
      <div className='content-text'>
        <h1>Whalecum!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus eligendi nostrum maxime assumenda dolore quod consequatur nesciunt tenetur illum cumque nulla, laudantium, est reprehenderit magni modi libero id distinctio explicabo.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus eligendi nostrum maxime assumenda dolore quod consequatur nesciunt tenetur illum cumque nulla, laudantium, est reprehenderit magni modi libero id distinctio explicabo.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus eligendi nostrum maxime assumenda dolore quod consequatur nesciunt tenetur illum cumque nulla, laudantium, est reprehenderit magni modi libero id distinctio explicabo.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus eligendi nostrum maxime assumenda dolore quod consequatur nesciunt tenetur illum cumque nulla, laudantium, est reprehenderit magni modi libero id distinctio explicabo.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus eligendi nostrum maxime assumenda dolore quod consequatur nesciunt tenetur illum cumque nulla, laudantium, est reprehenderit magni modi libero id distinctio explicabo.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus eligendi nostrum maxime assumenda dolore quod consequatur nesciunt tenetur illum cumque nulla, laudantium, est reprehenderit magni modi libero id distinctio explicabo.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus eligendi nostrum maxime assumenda dolore quod consequatur nesciunt tenetur illum cumque nulla, laudantium, est reprehenderit magni modi libero id distinctio explicabo.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus eligendi nostrum maxime assumenda dolore quod consequatur nesciunt tenetur illum cumque nulla, laudantium, est reprehenderit magni modi libero id distinctio explicabo.</p>
      </div>
      <div className='content-aside'>
        <h3>About me</h3>
        <img src="http://placehold.it/150x150?text=me" />
        <p><strong>some tagline</strong></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur eveniet eius nihil possimus officia eos quasi repellendus quia magni assumenda, unde voluptatum qui dolore, beatae reprehenderit explicabo earum repudiandae. Dicta.</p>
      </div>
  </Layout>
)