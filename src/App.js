import './App.css';
import React, { useState } from 'react';
import { getZodiacSign, getZodiacImage } from './Astrologie';

function App() {

  const [year, setYear] = useState(1900);
  const [zodiac, setZodiac] = useState('');

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [zodiacSign, setZodiacSign] = useState('');
  const [zodiacImage, setZodiacImage] = useState('');
  
  const handleCheckZodiac = () => {
    const sign = getZodiacSign(parseInt(day), parseInt(month));
    setZodiacSign(sign);
  };

  function chineseZodiac() {
    const zodiacSigns = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
    const zodiacSignsImage = [
      "https://cdn.leonardo.ai/users/2cbfd30f-6e5b-419d-94c0-00853dd21810/generations/c54cfa8e-01e5-4e64-88cf-fbe70ec7fe96/Default_Rat_0.jpg",
      "https://cdn.leonardo.ai/users/2cbfd30f-6e5b-419d-94c0-00853dd21810/generations/a10fe079-9572-4717-8edf-82c02eef1d1b/Default_Ox_0.jpg",
      "https://cdn.leonardo.ai/users/2cbfd30f-6e5b-419d-94c0-00853dd21810/generations/29a55291-7fcd-410d-bd31-08aed08ae3b7/Default_Tiger_0.jpg",
      "https://cdn.leonardo.ai/users/2cbfd30f-6e5b-419d-94c0-00853dd21810/generations/5d40feed-2f0b-4bea-b0a6-5e7f64018758/Default_Rabbit_0.jpg",
      "https://cdn.leonardo.ai/users/2cbfd30f-6e5b-419d-94c0-00853dd21810/generations/91a1bb08-6b70-46ec-af7f-19cbfa59d7e2/Default_Dragon_0.jpg",
      "https://cdn.leonardo.ai/users/2cbfd30f-6e5b-419d-94c0-00853dd21810/generations/7077a167-32ba-4f5f-8dc3-e141095dcfa0/Default_Snake_0.jpg",
      "https://cdn.leonardo.ai/users/2cbfd30f-6e5b-419d-94c0-00853dd21810/generations/b0a89736-4850-4004-9c42-45424281e2de/Default_Horse_0.jpg",
      "https://cdn.leonardo.ai/users/2cbfd30f-6e5b-419d-94c0-00853dd21810/generations/4c6e91a7-0479-4ee5-bb56-dcebeea434b8/Default_Goat_animal_0.jpg",
      "https://cdn.leonardo.ai/users/2cbfd30f-6e5b-419d-94c0-00853dd21810/generations/05d49202-7a4b-454e-bb91-7b9c2a3fbccc/Default_monkey_0.jpg",
      "https://cdn.leonardo.ai/users/2cbfd30f-6e5b-419d-94c0-00853dd21810/generations/c7b5a00e-3684-4d54-9a3b-f4354fd4600c/Default_Rooster_0.jpg",
      "https://cdn.leonardo.ai/users/2cbfd30f-6e5b-419d-94c0-00853dd21810/generations/4aa80b1b-810e-45d0-a9d3-784dc5728ad3/Default_Dog_0.jpg?w=512",
      "https://cdn.leonardo.ai/users/2cbfd30f-6e5b-419d-94c0-00853dd21810/generations/58ee76ba-9458-4500-ae3a-55f0c8c5465a/Default_Pig_0.jpg"];
    const startYear = 1900; // Start year of the Chinese zodiac cycle
    setZodiac(zodiacSigns[(year - startYear) % 12])
    setZodiacImage(zodiacSignsImage[(year - startYear) % 12])
    return zodiacSigns[(year - startYear) % 12];
  }

  return (
    <div className="App">
      <nav >
      <hr className="myHr"></hr>
        <a className="navbar-brand" href="/">Horoscpe</a>
      <hr className="myHr"></hr>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    <div className="container mt-5">
    <div className="row">
        <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 class="card-title">Chinese zodiac</h5>
                <div className="form-group">
                  <label htmlFor="name">Year</label>
                  <input type="number" aria-describedby="numberHelp" className="form-control" id="name" value={year} onChange={e => setYear(e.target.value)} />
                  <small id="numberHelp" className="form-text text-muted">Must be superior to 1900</small>
                </div>
                <button onClick={chineseZodiac} className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card card-3d">
              <div class="card-body">
                <h5 clasName="card-title">{zodiac}</h5>
                <img src={zodiacImage} alt='zodiac animal' />
              </div>
            </div>
          </div>
        </div>
      </div> 
      <br></br>
      <hr className="myHr"></hr>
    <div className="container mt-5">
    <div className="row">
        <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Astrologie Zodiac</h5>
                <div className="form-group">
                  <label htmlFor="name">Jour
                    <input type="number" aria-describedby="numberHelp" className="form-control" id="jour"
                       value={day} onChange={(e) => setDay(e.target.value)} min="1" max="31" />
                   </label>
                   <td/>
                   <label htmlFor="name">
                    Mois
                     <input
                       type="number" aria-describedby="numberHelp" className="form-control" id="mois"
                       value={month} onChange={(e) => setMonth(e.target.value)} min="1" max="12"/>
                   </label>
                </div>            
                <button onClick={handleCheckZodiac} className="btn btn-primary">Vérifier le signe</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card card-3d">
              <div className="card-body">
                <h5 className="card-title">{zodiacSign}</h5>
                <img src={getZodiacImage(zodiacSign)} alt='zodiac animal' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
