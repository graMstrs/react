import { Formik } from 'formik' 
import { Form } from 'formik';
import { Field } from 'formik';
import { useState } from 'react';
import './header.css'
import './content.css'
import './article.css'

const App = () => {
  const[photos, setPhotos] = useState([])
  const open = url => window.open(url)
  console.log({ photos }) 
  return (
   <div>
    <header>
      <Formik
        initialValues={{search: ''}}
        onSubmit = { async values => {
          const response = await 
            fetch (
              `https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`, 
              {
                headers: {
                  'Authorization': 'Client-ID Onvn0PvI3b06Ed9GoorONJ_xr6KF45eIza8IvBZCwTY'
                }
              }
            )
          const data = await response.json()
          setPhotos(data.results)
          //llamar api de unsplash
          
        }}
      >
        <Form>
          <Field name = "search"/>
        </Form>
      </Formik>
    </header>
    <div className='container'>
      <div className='center'>
        {photos.map( photo => 
          <article 
            key={photo.id}
            onClick={() => open(photo.links.html)}
          >
            <img src={photo.urls.regular} />
            <p>{[photo.description, photo.alt_description].join(' - ')}</p>
          </article>
        )}
      </div>
    </div>
   </div>
  );
}

export default App;
