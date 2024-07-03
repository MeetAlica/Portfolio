import PropTypes from "prop-types";

const ImageModal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative w-11/12 md:w-3/4 lg:w-1/2 bg-primary-color rounded-lg overflow-hidden">
        <button
          className="absolute top-5 right-5 text-white bg-red-500 hover:bg-red-800 transition duration-300 rounded-full w-10 h-10"
          onClick={onClose}
        >
          ×
        </button>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

ImageModal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImageModal;
