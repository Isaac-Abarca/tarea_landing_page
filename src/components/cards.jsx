import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBRow className="row-cols-1 row-cols-md-3 g-4">
      <MDBCol>
        <MDBCard className="h-100">
          <MDBCardImage
            src="https://mdbootstrap.com/img/new/standard/city/041.webp"
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <MDBCardTitle>El Jardín del Éte</MDBCardTitle>
            <MDBCardText>
              Sumérgete en la magia de un jardín encantado donde las flores
              cobran vida y los senderos te llevan a un mundo de ensueño. El
              Jardín del Éter es un remanso de paz y belleza, con sus
              exuberantes prados, fuentes cristalinas y esculturas misteriosas.
              Déjate cautivar por la armonía de la naturaleza y descubre un
              lugar donde la realidad y la fantasía se entrelazan
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className="h-100">
          <MDBCardImage
            src="https://mdbootstrap.com/img/new/standard/city/042.webp"
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <MDBCardTitle>La Cumbre de los Sueños</MDBCardTitle>
            <MDBCardText>
              Embárcate en una aventura épica hacia La Cumbre de los Sueños:
              majestuosas montañas con picos escarpados y belleza imponente.
              Supera tus límites, explora senderos serpenteantes y contempla la
              grandeza de la tierra desde lo más alto. Vive una experiencia
              inolvidable en este paraíso montañoso.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className="h-100">
          <MDBCardImage
            src="https://mdbootstrap.com/img/new/standard/city/044.webp"
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <MDBCardTitle>La Ciudad Esmeralda</MDBCardTitle>
            <MDBCardText>
              Un oasis urbano donde los rascacielos brillan como gemas y las
              calles están llenas de energía y vida. Esta metrópolis futurista
              te sorprenderá con su arquitectura vanguardista, parques
              tecnológicos y una cultura vibrante. Explora sus bulliciosos
              mercados, disfruta de la deliciosa gastronomía de clase mundial y
              déjate llevar por la corriente de emociones que fluye por las
              calles de esta ciudad en constante evolución.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
