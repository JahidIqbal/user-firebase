import firebase from "../Firebase/FirebaseConfig";


const GoalList = () => {
    const infoForm = firebase.database().ref('infomation');

    const infosubmit = () => {
        var name = getElementVal('nameField')
        saveInfo(name);
    }

    const saveInfo = (name) => {
        var newInfoFormRef = infoForm.push();
        newInfoFormRef.set({
            name: name,
        })
    }

    const getElementVal = (id) => {
        return document.getElementById(id).value
    }



    return (

        <div className='container mt-4' style={{ backgroundColor: 'white' }}>

            <div className="row justify-content-center align-items-center">
                <div className="col-md-6 justify-content-center align-items-center">
                    <h1 className="h1 font-weight-bold text-uppercase">Goal</h1>
                    <p className="font-italic font-weight-bold">Select your primary Goal. What do you want to<br />
                        accomplish in the next few months?
                    </p>
                </div>
                <div className="col-md-6 bg-light justify-content-center align-items-center">

                    <form onSubmit={(e) => e.preventDefault()}>
                        <input type="radio" name="cat" value="Get leaner" required id="nameField" /> Get leaner<br />
                        <input type="radio" name="cat" value="Get active again" required id="Get active again" /> Get active again<br />
                        <input type="radio" name="cat" value="Reduce pain or injury" required id="nameField" /> Reduce pain or injury<br />
                        <input type="radio" name="cat" value="Improve cardio or speed" required id="nameField" /> Improve cardio or speed<br />
                        <input type="radio" name="cat" value="Improve Sports Performance" required id="nameField" /> Improve Sports Performance<br />
                        <button type="submit" onClick={infosubmit} className="blue">SUBMIT</button>

                    </form>


                </div>

            </div>

        </div>
    );
};

export default GoalList;