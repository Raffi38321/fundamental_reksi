
import './App.css';
import Mobil from './component/product';

function App() {
  return (
    <div className='cards'>
      <Mobil
      nama_mobil = 'Ford'
      ling_poto='https://images.unsplash.com/photo-1551830820-330a71b99659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTQ2MDgwOQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
      deskripsi_mobil = 'mobil yang sangat kontol'
      />
      <Mobil
      nama_mobil = 'Mustang'
      ling_poto='https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMyMzE1OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
      deskripsi_mobil = 'Mobil Mustang mempunyai desain yang elegan'
      />
      <Mobil
      nama_mobil = 'Toyota'
      ling_poto='https://images.unsplash.com/photo-1559416523-140ddc3d238c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0MjIxNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
      deskripsi_mobil = 'Mobil toyota memiliki interior dan body yang kokoh'
      />
      <Mobil
      nama_mobil = 'Lamborghini'
      ling_poto='https://images.unsplash.com/photo-1621135802920-133df287f89c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NjA0MjYyNw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
      deskripsi_mobil = 'Mobil Lamborghini memiliki interior dan body yang kokoh'
      />
      
    </div>    
  );
}

export default App;
