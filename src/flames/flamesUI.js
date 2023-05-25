import './flamesUI.css';

function FlamesUI(){
    return (
        <div className="container">
        <h2>Welcome to Flames</h2>
        <form id="myForm">
          <div className="form-group">
            <label htmlFor="name1">Your name:</label>
            <input type="text" id="name1" name="myName" required/>
          </div>
          <div className="form-group">
            <label htmlFor="name2">Your Partner name:</label>
            <input type="text" id="name2" name="mineName" required/>
          </div>
          <button type="submit" className="btn">Submit</button>
          <button type="button" className="btn" onclick="clearForm()">Clear</button>
        </form>
      </div>
    )
}


export default FlamesUI;