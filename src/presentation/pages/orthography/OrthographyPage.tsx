import { useState } from "react"
import { GptMessage, MyMessage, TextMessageBox, TyPingLoader } from "../../components"


interface Message {
  text: string;
  isGpt: boolean;
}


export const OrthographyPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);


  const handlePost = async( text:string ) => {
    setIsLoading( true );
    setMessages( prevMessages => [...prevMessages, { isGpt: false, text }]);

    // Todo: use-case

    setIsLoading(false);

    //TODO: añadir el mensaje de isGpt en true
  }


  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">

          {/* Bienvenida */}
          <GptMessage text={`Hola, puedes escribir tu texto en español y te ayudo con las correcciónes`}/>

          {
            messages.map( (message, index) => (
              message.isGpt
                ?
              (<GptMessage key={index} text={"Esto es de OpenAI"}/>)
                :
              (<MyMessage key={index} text={`${message.text}`}/>)
            ))
          }

          {
            isLoading
            &&
            <div className="col-start-1 col-end-12 fade-in">
              <TyPingLoader/>
            </div>
          }

        </div>
      </div>

      <TextMessageBox
        onSendMessage={ handlePost }
        placeholder={"Escibe lo que deseas traducir"}
        disabledCorrection
      />
    </div>
  )
}
