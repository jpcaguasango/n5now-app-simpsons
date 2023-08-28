import styled from "styled-components";
import { Colors } from "../helpers/enums/colors";

const { BgBlue, BgYellow } = Colors;

const PaginatorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
`;

const PageButton = styled.button`
  padding: 8px 16px;
  margin: 0 5px;
  border: none;
  background-color: ${(props) => (props.active ? BgBlue : BgYellow)};
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
`;

const ArrowButton = styled.button`
  padding: 8px 16px;
  border: none;
  background-color: ${BgYellow};
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
`;

const Paginator = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageButtons = () => {
    const buttons = [];
    const maxPagesToShow = 5;

    let startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(endPage - maxPagesToShow + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <PageButton
          key={i}
          active={i === currentPage}
          onClick={() => onPageChange(i)}
        >
          {i}
        </PageButton>
      );
    }
    return buttons;
  };

  return (
    <PaginatorContainer>
      <ArrowButton
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        &lt;
      </ArrowButton>
      {renderPageButtons()}
      <ArrowButton
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        &gt;
      </ArrowButton>
    </PaginatorContainer>
  );
};

export default Paginator;
