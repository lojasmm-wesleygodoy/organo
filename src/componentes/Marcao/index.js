import './marcao.css';

const Marcao = ( { background = 'pink', texto = '' } ) => {
  return (
    <section className="teste" style={{ backgroundColor: background}}>
      <p>{texto}</p>
    </section>
  );
}

export default Marcao;