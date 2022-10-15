import { useContext } from "react";
import { useForm } from "react-hook-form";
import { NewCardContext } from "../context/NewCardContext";
import './Formulario.css';

const Formulario = () => {
    const{newCard, setNewCard}= useContext(NewCardContext)

 const {
   register,
   handleSubmit,
   formState: { errors },
 } = useForm( {
    defaultValues: {
        placeName:'',
        Longitud: '',
        Latitud:'',

    }
 });

 const onSubmit = (data) => {
   console.log(data);

    const tarjetita = {
      id: newCard.length + 1,
      name: data.placeName,
      Latitud: data.Latitud,
      Longitud: data.Longitud
    }
setNewCard([...newCard,tarjetita])
   }

  return ( 
    <div className='palette-new-container'>
      <span>Nueva ubicación:</span>
      <form className='palette-form' onSubmit={handleSubmit(onSubmit)}>
        <input
          className='input-palette-name-form'
          type='text'
          placeholder='Lugar'
          {...register('placeName', {
            required: true,
          })}
        />
        {errors.placeName?.type === 'required' && <span>Debe ingresar un nombre de la localización</span>}
        <input
          type='number'
          placeholder="Latitud"
          {...register('Latitud', {
            required: true,
          })}
        />
        {errors.Latitud?.type === 'required' && <span>Debe ingresar una latitud válida</span>}
        <input
          type='number'
          placeholder="Longitud"
          {...register('Longitud', {
            required: true,
          })}
        />
        {errors.Longitud?.type === 'required' && <span>Debe ingresar una longitud válida</span>}

        <button className='btn-form' type='submit'>
          Crear ubicación
        </button>
      </form>
    </div>
  ); 
};
export default Formulario;