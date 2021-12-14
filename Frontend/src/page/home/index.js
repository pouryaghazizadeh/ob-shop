// tools
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect} from "react";
import styled from "styled-components";
// data
import { data } from "../../data";
// style
import "./home.css";


function Home() {
  useEffect(() => {
    aos.init({ duration: 600 });
  }, []);


  return (
    <main className="HomePage">
      <section className="container1">
        <div className="container-text">
          <h2
            data-aos="fade-down"
            data-aos-delay="500"
            className="Welcome-text"
          >
            Welcome
          </h2>

          <h2 data-aos="fade-down" data-aos-delay="1000" className="To-text">
            To
          </h2>
          <h2 data-aos="fade-down" data-aos-delay="1400" className="title-text">
            OB-Shop
          </h2>
        </div>
      </section>
      {/* second container */}

      {data.map((v) => {
        return (
          <div key={v.id} className="container-card-home">
            <p className="title-card-homepage" data-aos={v.animationText}>
              {v.title}
            </p>
            <img
              alt={v.title}
              src={v.img}
              className="img-card-homepage"
              data-aos={v.animationImg}
            />
          </div>
        );
      })}
     
      
    </main>
  );
}

export default Home;

// <section className="container2">
//           <img
//             data-aos="fade-right"
//             className="img-container2"
//             alt="buying"
//             src="https://media.istockphoto.com/photos/woman-holding-sale-shopping-bags-consumerism-shopping-lifestyle-picture-id1254508881?b=1&k=20&m=1254508881&s=170667a&w=0&h=e8irxc-knpSghyK9ZI19uOOHv0QDEWscs2O4BwGRcLA="
//           />
//           <h2 data-aos="fade-left" className="text-container2">
//             Buy easy
//           </h2>
//         </section>
//         {/* section 2 */}
//         <section className="container2" id="con-3">
//           <h2 data-aos="fade-right" className="text-container2">
//             Buy fast
//           </h2>
//           <img
//             data-aos="fade-left"
//             className="img-container2"
//             alt="buying"
//             src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
//           />
//         </section>
//         {/* section 3 */}
//         <section className="container2">
//           <img
//             data-aos="fade-right"
//             className="img-container2"
//             alt="buying"
//             src="https://images.unsplash.com/photo-1585580337263-ded7809bfd8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEyfHxzaG9wcGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
//           />
//           <h2 className="text-container2" data-aos="fade-left">
//             enjoy always
//           </h2>
//         </section>
//         <section className="container2" id="con-3">
//           <h2 className="text-container2" data-aos="fade-right">
//             Be Happy with us
//           </h2>
//           <img
//             data-aos="fade-left"
//             className="img-container2"
//             alt="buying"
//             src="https://images.unsplash.com/photo-1615472427246-add63ea9e828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUxfHxzaG9wcGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
//           />
//         </section>
