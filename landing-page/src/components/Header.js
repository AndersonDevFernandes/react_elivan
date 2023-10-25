function Header (){
  return(
    <>
    <div className='Header'>
      <div className='box-logo'>
       <div className='logo'></div>
      </div>
      <div className='box-names-header'>
       <a href="/landing-page/src/App.js"><button className='btn-header'>Home</button></a>
       <a href=""/><button className='btn-header'>Trajetória</button>
       <a href=""/><button className='btn-header'>Feedback</button>
      </div>
    </div>
    </>
  )
}

export default Header