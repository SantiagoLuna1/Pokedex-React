import React from "react";
import Pagination from 'react-bootstrap/Pagination';

const Paginacion = ({ paginaActual, totalPaginas, cambiarPagina }) => {
  const calcularPaginacion = () => {
    let paginas = [];

    if (paginaActual === 1) {
      paginas = [1, 2, 3];
    }

    else if (paginaActual > 1 && paginaActual < totalPaginas) {
      paginas = [paginaActual - 1, paginaActual, paginaActual + 1];
    }

    else if (paginaActual === totalPaginas) {
      paginas = [totalPaginas - 2, totalPaginas - 1, totalPaginas];
    }

    return paginas;
  };

  const paginas = calcularPaginacion();

  return (
    <Pagination>
      <Pagination.First onClick={() => cambiarPagina(1)} disabled={paginaActual === 1} />
      <Pagination.Prev onClick={() => cambiarPagina(paginaActual - 1)} disabled={paginaActual === 1} />

      {paginas.map((pagina) => (
        <Pagination.Item
          key={pagina}
          active={pagina === paginaActual}
          onClick={() => cambiarPagina(pagina)}
        >
          {pagina}
        </Pagination.Item>
      ))}

      <Pagination.Next onClick={() => cambiarPagina(paginaActual + 1)} disabled={paginaActual === totalPaginas} />
      <Pagination.Last onClick={() => cambiarPagina(totalPaginas)} disabled={paginaActual === totalPaginas} />
    </Pagination>
  );
};

export default Paginacion;