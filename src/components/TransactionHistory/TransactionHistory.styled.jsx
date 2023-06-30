import styled from "@emotion/styled";

export const Table = styled.table`
  width: 80%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #f5f7fa;
`;

export const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
`;

export const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #e8f0fe;
  }

  &:hover {
    background-color: #d6e4fd;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
`;