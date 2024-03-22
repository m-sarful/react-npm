import './App.css'
import Grandpa from './Components/Grandpa/Grandpa'
// import HookForm from './Components/HookForm/HookForm'
// import ReusableForm from './Components/ReusableForm/ReusableForm'
// import RefForm from './Components/RefForm/RefForm'
// import StateFullForm from './Components/StateFullForm/StateFullForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'

function App() {

//   const handleSubmit = data =>{
//    console.log('Sign Up', data);
// }

//   const handleUpdate = data =>{
//     console.log('Updated Profile', data);
//   }

  return (
    <>
      <h1>Form Master</h1>
      <Grandpa></Grandpa>
     {/* <SimpleForm></SimpleForm> */}
     {/* <StateFullForm></StateFullForm> */}
     {/* <RefForm></RefForm> */}
     {/* <HookForm></HookForm> */}
     {/* <ReusableForm formTitle={'Sign Up'}
      handleSubmit={handleSubmit}
      >
        <div>
          <h3>Sign up right now</h3>
        </div>
      </ReusableForm>
     <ReusableForm formTitle={'Update'}
      submitBtnText='Update'
       handleSubmit={handleUpdate}>
        <div>
          <h3>Always keep your profile updated</h3>
        </div>
       </ReusableForm> */}
    </>
  )
}

export default App
