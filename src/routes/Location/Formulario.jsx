import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { NewCardContext } from "../../context/NewCardContext";
import { getWeatherInfo } from "../../service";
import "./Formulario.css";

const Formulario = () => {
  const { newCard, setNewCard } = useContext(NewCardContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      placeName: "",
      Longitud: "",
      Latitud: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    const respuesta = await getWeatherInfo(data.Latitud, data.Longitud);
    console.log(respuesta.current_weather);
    const tarjetita = {
      id: newCard.length + 1,
      placeName: data.placeName,
      Latitud: data.Latitud,
      Longitud: data.Longitud,
      Temperature: respuesta.current_weather.temperature,
      WindSpeed: respuesta.current_weather.windspeed
    }
    setNewCard([...newCard,tarjetita])
    navigate("/");
  };

  return (
    <div className="palette-new-container">
      
      <form className="palette-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-palette-name-form"
          type="text"
          placeholder="Lugar"
          {...register("placeName", {
            required: true,
          })}
        />
        {errors.placeName?.type === "required" && (
          <span>Debe ingresar una ubicación</span>
        )}
        <input
          type="number"
          placeholder="Latitud"
          {...register("Latitud", {
            required: true,
          })}
        />
        {errors.Latitud?.type === "required" && (
          <span>Debe ingresar una latitud válida</span>
        )}
        <input
          type="number"
          placeholder="Longitud"
          {...register("Longitud", {
            required: true,
          })}
        />
        {errors.Longitud?.type === "required" && (
          <span>Debe ingresar una longitud válida</span>
        )}

        <button className="btn-form" type="submit">
          Crear ubicación
        </button>
      </form>
    </div>
  );
};
export default Formulario;
