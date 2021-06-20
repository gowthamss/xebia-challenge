import React from "react";
import "./pdf-reader.styles.scss";

import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import Resume from "../../assets/my_resume.pdf";

const PdfReader = () => (
    <Document file={Resume}>
        <Page pageNumber={1} />
    </Document>
);

export default PdfReader;
