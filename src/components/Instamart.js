import { useState } from "react";



const Section = ({ title, description, isVisible, setIsVisible }) => {

  return (

    <div className="border border-black p-2 m-2">

      <h3 className="font-bold text-xl">{title}</h3>

      {isVisible ? (

        <button

         onClick={() => setIsVisible(false)}

          className="cursor-pointer underline"

        >

          Hide

       </button>

     ) : (
      <button

        onClick={() => setIsVisible(true)}

          className="cursor-pointer underline"

        >

          Show

        </button>

      )}



      {isVisible && <p>{description}</p>}

    </div>

  );

};





const Instamart = () => {
   const [visibleSection, setIsVisibleSection] = useState("team");
  


  return (
    <div>
      <Section
        title={"AboutInstaMart"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
         isVisible={visibleSection === "about"}

        setIsVisible={() => setIsVisibleSection("about")}


      />

      <Section
        title={"Team InstaMart"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={visibleSection === "team"}

        setIsVisible={() => setIsVisibleSection("team")}
      />

      <Section
        title={"Careers"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={visibleSection === "career"}

        setIsVisible={() => setIsVisibleSection("career")}
      />
    </div>
  );
};

export default Instamart;