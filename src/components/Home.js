import React, { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import poke from '../assets/poke.png'
import { getPokemon } from '../store/info/action';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';
const Home = () => {
  const dispatch = useDispatch() 
  const {pokemons, loadingPokemon} = useSelector((state) => state.Pokemons)
  const [busqueda, setBusqueda] = useState(pokemons);

  useEffect(() => {
    dispatch(getPokemon())
  }, [])

  if (loadingPokemon){
    return (
      <Spin />
    )
  }

  const handleChange = e=>{
    setBusqueda(e.target.value)
    filterPokemons(e.target.value)
  }

  const filterPokemons = (busqueda) => {
    var results = pokemons.filter((pokemon) => {
      if(pokemon.name.toLowerCase().includes(busqueda.toLowerCase())){
        return pokemon;
      }
    })
    setBusqueda(results)
  }
  console.log(busqueda)

  return (
  <div className={styles.Home}>
    <div className={styles.First}>
      <img src={poke} width={500} height={450} ></img>
      <input type='text' placeholder='Look your pokemon' className={styles.search} onChange={handleChange}></input> 
      <ul className={styles.lista}>
        <a href=''><img src='https://em-content.zobj.net/source/microsoft-teams/337/large-yellow-circle_1f7e1.png' width={15}className={styles.img}/>FIRE</a>
        <a href=''><img src='https://images.vexels.com/media/users/3/139158/isolated/preview/c862a3c9ef219140fb365301f9ebbd50-punto-negro.png' width={15} className={styles.img}/>Poison</a>
        <a href=''><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Punto_verde.png/800px-Punto_verde.png' width={15}className={styles.img} />Grass</a>
        <a href=''><img src='https://www.downloadclipart.net/svg/35952-glossy-home-icon-button-sky-blue-vector.svg' width={15} className={styles.img}/>Water</a>
        <a href=''><img src='https://creazilla-store.fra1.digitaloceanspaces.com/emojis/58159/brown-circle-emoji-clipart-md.png' width={15} className={styles.img}/>Bug</a>
        <a href=''><img src='https://img.freepik.com/iconos-gratis/sol_318-564104.jpg' width={15} className={styles.img}/>Electric</a>
        <a href=''><img src='https://www.decagono.com/img/circulo.png' width={15} className={styles.img}/>Normal</a>
        <a href=''><img src='https://static.vecteezy.com/system/resources/previews/010/977/798/original/pink-gradient-circle-free-png.png' width={15} className={styles.img}/>Fairy</a>
        <a href=''><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Circle_Khaki_Solid.svg/768px-Circle_Khaki_Solid.svg.png' width={15} className={styles.img}/>Flying</a>
        <a href=''><img src='https://static.vecteezy.com/system/resources/previews/009/638/686/non_2x/earth-tone-splash-circle-watercolor-sublimation-design-graphic-free-png.png' width={15} className={styles.img}/>Ground</a>
        <a href=''><img src='https://images.emojiterra.com/google/android-11/512px/1f7e3.png' width={15} className={styles.img}/>Fighting</a>
        <a href=''><img src='https://static.vecteezy.com/system/resources/thumbnails/020/389/332/small/round-gradient-circle-png.png' width={15} className={styles.img}/>Psychic</a>
      </ul>
      <div className={styles.CardPokemon}>
        {busqueda?.map((pokemon) => (
          <div className={styles.CardOnly}>
            <div className={styles.center}>
              <p className={styles.title}>{pokemon?.name}</p>
              <p className={styles.id}>Nº {pokemon.info.id}</p>
              {/* <img src={pokemon.info.sprites.other['official-artwork'].front_shiny} width={200} height={150} className={styles.pokeimg}/> */}
              {/* <img src={pokemon.info.sprites.versions['generation-iv'].platinum.back_shiny} width={200} height={150} className={styles.pokeHover}/>
              <img src={pokemon.info.sprites.versions['generation-v']['black-white'].animated.back_default} width={200} height={150} className={styles.pokeHover}/> */}
              <img src={pokemon.info.sprites.versions['generation-v']['black-white'].animated.front_default} width={150} height={100} className={styles.pokeHover}/>
              <div className={styles.tipos}>
                {pokemon.info.types?.map((tipo) => (
                  <div>    
                    {
                      (() => {
                        if(tipo.type.name === 'fire') {
                          return (
                            <img src='https://em-content.zobj.net/source/microsoft-teams/337/large-yellow-circle_1f7e1.png' width={20} height={20}/>
                          )

                          return (
                            <img src='https://em-content.zobj.net/source/microsoft-teams/337/large-yellow-circle_1f7e1.png' width={20} height={20}/>
                            )
                          }if (tipo.type.name === 'poison') {
                            return (
                              <img src='https://cdn-icons-png.flaticon.com/512/0/14.png' width={20} height={20}/>
                            )
                          }  if (tipo.type.name === 'grass') {
                          return (
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Punto_verde.png/800px-Punto_verde.png' width={20} height={20}/>
                            )
                          } if(tipo.type.name === 'water') {
                            return (
                              <img src='https://www.downloadclipart.net/svg/35952-glossy-home-icon-button-sky-blue-vector.svg' width={22} height={20}/>
                            )
                          } if(tipo.type.name === 'bug') {
                            return (
                              <img src='https://creazilla-store.fra1.digitaloceanspaces.com/emojis/58159/brown-circle-emoji-clipart-md.png' width={20} height={20}/>
                            )
                          } if(tipo.type.name === 'electric') {
                            return (
                              <img src='https://img.freepik.com/iconos-gratis/sol_318-564104.jpg' width={15} height={15}/>
                            )
                          } if(tipo.type.name === 'normal') {
                            return (
                              <img src='https://www.decagono.com/img/circulo.png' width={20} height={20}/>
                            )
                          } if(tipo.type.name === 'flying') {
                            return (
                              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Circle_Khaki_Solid.svg/768px-Circle_Khaki_Solid.svg.png' width={20} height={20}/>
                            )
                          } if(tipo.type.name === 'ground') {
                            return (
                              <img src='https://static.vecteezy.com/system/resources/previews/009/638/686/non_2x/earth-tone-splash-circle-watercolor-sublimation-design-graphic-free-png.png' width={20} height={20}/>
                            )
                          } if(tipo.type.name === 'fairy') {
                            return (
                              <img src='https://static.vecteezy.com/system/resources/previews/010/977/798/original/pink-gradient-circle-free-png.png' width={20} height={20}/>
                            )
                          } if(tipo.type.name === 'fighting') {
                            return (
                              <img src='https://images.emojiterra.com/google/android-11/512px/1f7e3.png' width={20} height={20}/>
                            )
                          } if(tipo.type.name === 'psychic') {
                            return (
                              <img src='https://static.vecteezy.com/system/resources/thumbnails/020/389/332/small/round-gradient-circle-png.png' width={22} height={22} />
                            )
                          }
                      })()  
                    }  
                  </div>     
                ))}
              </div>
            </div>
            <div className={styles.info}>
              <p className={styles.text}>Height: {pokemon.info.height}</p>
              <p className={styles.text}>Weight: {pokemon.info.weight}</p> 
              <p className={styles.text}>Base experience: {pokemon.info.base_experience}</p>
            </div>
            
          </div>
        ))} 
      </div>
    </div>
  </div>
  )
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
