import React from "react";
import DocumentHeader from "./DocumentHeader";
import DocumentInfo from "./DocumentInfo";

const DocumentEditorSection = ({params}) => {
  return (
    <div>
      {/* //! Header*/}
      <DocumentHeader />
      {/* //! Document Info */}
      <DocumentInfo params={params} />

          {/* //! Rich  text editor  */}
          
    </div>
  );
};

export default DocumentEditorSection;
