import '../../scss/checkout/input.scss';
function InputText({ inputName, placeholder }) {
  return (
    <div className={'input-container'}>
      <div className={'input-label'}>{inputName}</div>
      <div className={'input-text'}>
        <input
          style={{ all: 'unset', width: '100%' }}
          type={'text'}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default InputText;
