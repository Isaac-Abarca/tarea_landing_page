import { useContext } from "react";
import { CountContext } from "../context/countContext";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  const { count, reset } = useContext(CountContext);
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Conéctate con nosotros en las redes sociales:</span>
        </div>
        <div>
          <button className="btn me-4 text-reset">
            Personas a bordo: {count}
          </button>
          <button className=" btn me-4 text-reset " onClick={reset}>
            Volvemos a 0 😥
          </button>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                ViajesInolvidables S.A
              </h6>
              <p>
                Viajes Inolvidables: Explora destinos fascinantes, vive
                experiencias inolvidables y crea recuerdos que perdurarán para
                siempre.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Viajes de Aventura Extrema
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Escapadas de Relax
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Experiencias Culturales
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Aventuras en la Naturaleza
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Precios
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Configuraciones
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Reservas
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Ayuda
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Alamedas, Golfito 10012, CR
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                ViajesInolvidables@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 506 1234 5678
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 506 1234 5678
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          ViajesInolvidables.com
        </a>
      </div>
    </MDBFooter>
  );
}
