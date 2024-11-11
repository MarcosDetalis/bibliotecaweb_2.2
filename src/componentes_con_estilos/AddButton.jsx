 
import Wrapper from './Estilos/button'


function AddButton({disabled, callTo, Class}) {
  return (
    <Wrapper className={Class}>
      <button disabled={disabled === 0} className={disabled === 0 ? 'disableButton' : null} onClick={callTo}>
        <div className='buttonWrapper'>
          <div><span>agregar</span></div>
          <div><img src={ '/icons/bagAdd.svg'} alt='add to bag'></img></div>
        </div>
      </button>
    </Wrapper>
  );
}

export default AddButton;