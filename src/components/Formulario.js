import Input from "./Input";
import Label from "./Label";
import TextArea from "./TextArea";
import Select from "./Select";

export default function Formulario() {
    return (
        <form action="" method="get">
            <div>
                <Label htmlFor="nombre" text="Nombre:" />
                <Input type="text" name="nombre" id="nombre" maxLength={50} />
            </div>

            <div>
                <Label htmlFor="apellidos" text="Apellidos:" />
                <Input type="text" name="apellidos" id="apellidos" maxLength={50} />
            </div>

            <div>
                <p>Sexo:</p>
                <Input type="radio" name="sexo" id="sexo-h" value="h" />
                <Label htmlFor="sexo-h" text="hombre" />
                <Input type="radio" name="sexo" id="sexo-m" value="m" />
                <Label htmlFor="sexo-m" text="mujer" />
            </div>

            <div>
                <Label htmlFor="correo" text="Correo:" />
                <Input type="text" name="correo" id="correo" maxLength={100} />
            </div>

            <div>
                <Label htmlFor="poblacion" text="Población:" />
                <Select />
            </div>

            <div>
                <Label htmlFor="descripcion" text="Descripción:" />
                <TextArea name="descripcion" id="descripcion" rows="6" cols="60" />
            </div>

            <div>
                <Input type="checkbox" name="info" id="info" />
                <Label htmlFor="info" text="Deseo recibir información sobre novedades y ofertas" />
            </div>

            <div>
                <Input type="checkbox" name="condiciones" id="condiciones" />
                <Label htmlFor="condiciones" text="Declaro haber leido y aceptar las condiciones generales del programa y la normativa sobre protección de datos" />
            </div>

            <div>
                <Input type="submit" value="Enviar" />
            </div>
        </form>
    );
}