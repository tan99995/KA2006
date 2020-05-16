import React from 'react'
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup'



const initialState = {
    selectFile: null,
    id: "",
    optical1: "",
    optical2: "",
    optical3: "",
    optical4: "",
    optical5: "",
    infrared1: "",
    infrared2: "",
    infrared3: "",
    infrared4: "",
    infrared5: "",
    infrared6: "",
    radio: "",


    optical_e: "",
    optical1_e: "",
    optical2_e: "",
    optical3_e: "",
    optical4_e: "",
    optical5_e: "",
    infrared1_e: "",
    infrared2_e: "",
    infrared3_e: "",
    infrared4_e: "",
    infrared5_e: "",
    infrared6_e: "",
    radio_e: "",
};

class input_field extends React.Component {


    state = initialState;
    handleSubmit = (event) => {
        event.preventDefault();
        const isValid = this.validate();
        if (!isValid) {
            console.log(this.state);
            this.state.optical_e = "";
            // clear error from form
            //  this.state.optical1_e="";
            //  this.state.optical2_e="";
            //  this.state.optical3_e="";
            //  this.state.optical4_e="";
            //  this.state.optical5_e="";
            //  this.state.infared1_e="";
            //  this.state.infared2_e="";
            //  this.state.infared3_e="";
            //  this.state.infared4_e="";
            //  this.state.infared5_e="";
            //  this.state.infared6_e="";
            //  this.state.radio_e="";
           
        }
    };



    handleChange = (event) => {
        const isCheckbox = event.target.type === "checkbox";
       
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value,
        });
    };


    validate = () => {
        let optical_e = "";
        let optical1_e = "";
        let optical2_e =  "";
        let optical3_e = "";
        let optical4_e = "";
        let optical5_e =  "";
        let infrared_e = "";
        let infrared1_e =  "";
        let infrared2_e =  "";
        let infrared3_e = "";
        let infrared4_e = "";
        let infrared5_e = "";
        let infrared6_e = "";
        let radio_e = "";


        if (!this.state.optical1){
          
        }
        else if (!/^[0-9]+([,.][0-9]+)?$/.test(this.state.optical1)) {
            //optical1_e = "optical is not suppose to have words or special characters";
            optical_e = "optical is not suppose to have words or special characters";
            console.log("this shit works");
        }

        if (!this.state.optical2) {

        }
        else if (!/^[0-9]+([,.][0-9]+)?$/.test(this.state.optical2)) {
           // optical2_e = "optical is not suppose to have words or special characters";
            optical_e = "optical is not suppose to have words or special characters";
        }

        if (!this.state.optical3) {

        }
        else if (!/^[0-9]+([,.][0-9]+)?$/.test(this.state.optical3)) {
            //optical3_e = "optical is not suppose to have words or special characters";
            optical_e = "optical is not suppose to have words or special characters";
        }

        if (!this.state.optical4) {

        }
        else if (!/^[0-9]+([,.][0-9]+)?$/.test(this.state.optical4)) {
            //optical4_e = "optical is not suppose to have words or special characters";
            optical_e = "optical is not suppose to have words or special characters";
        }

        if (!this.state.optical5) {

        }
        else if (!/^[0-9]+([,.][0-9]+)?$/.test(this.state.optical5)) {
           // optical5_e = "optical is not suppose to have words or special characters";
            optical_e = "optical is not suppose to have words or special characters";
        }

        if (!this.state.infrared1) {

        }
        else if (!/^[0-9]+([,.][0-9]+)?$/.test(this.state.infrared1)) {
           // infrared1_e = "infared is not suppose to have words or special characters";
            infrared_e = "infared is not suppose to have words or special characters";
        }

         if (!this.state.infrared2){
        
        }
        else if (!/^[0-9]+([,.][0-9]+)?$/.test(this.state.infrared2)) {
           // infrared2_e = "infared is not suppose to have words or special characters";
             infrared_e = "infared is not suppose to have words or special characters";
        }

         if (!this.state.infrared3){
        
        }
        else if (!/^[0-9]+([,.][0-9]+)?$/.test(this.state.infrared3)) {
            //infrared3_e = "infared is not suppose to have words or special characters";
             infrared_e = "infared is not suppose to have words or special characters";
        }

         if (!this.state.infrared4){
        
        }
        else if (!/^[0-9]+([,.][0-9]+)?$/.test(this.state.infrared4)) {
           // infrared4_e = "infared is not suppose to have words or special characters";
             infrared_e = "infared is not suppose to have words or special characters";
        }

         if (!this.state.infrared5){
        
        }
        else if (!/^[0-9]+([,.][0-9]+)?$/.test(this.state.infrared5)) {
            //infrared5_e = "infared is not suppose to have words or special characters";
             infrared_e = "infared is not suppose to have words or special characters";
        }

         if (!this.state.infrared6){
        
        }
        else if (!/^[0-9]+([,.][0-9]+)?$/.test(this.state.infrared6)) {
           // infrared6_e = "infared is not suppose to have words or special characters";
             infrared_e = "infared is not suppose to have words or special characters";
        }

         if (!this.state.radio){
        
        }
        else if (!/^[0-9]+([,.][0-9]+)?$/.test(this.state.radio)) {
            radio_e = "radio is not suppose to have words or special characters";
        }


if (optical_e || infrared_e || radio_e) {
            this.setState({ optical_e, infrared_e, radio_e });
            return false;
        }


        // if (optical1_e || optical2_e || optical3_e || optical4_e || optical5_e ||
        //     infrared1_e || infrared2_e || infrared3_e || infrared4_e || infrared5_e || infrared6_e || radio_e) {
        //     this.setState({ optical1_e, optical2_e, optical3_e, optical4_e, optical5_e, infrared1_e, infrared2_e, infrared3_e, infrared4_e, infrared5_e, infrared6_e, radio_e });
        //     return false;
        // }

        return true;
    };

 

    render() {
        
        return (
            <div>

                <form onSubmit={this.handleSubmit}>

                    <div className = "input_fe">

                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="">ID</span>


                                <input type="text" class="form-control" placeholder="ID" name="id" onChange={this.handleChange} />

                            </div>
                            </div>
                            


                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="optical_inp">Optical&nbsp;

</span>
                            </div>
                            <input type="text" class="form-control" placeholder="u" name="optical1" onChange={this.handleChange} />
                            <input type="text" class="form-control" placeholder="g" name="optical2" onChange={this.handleChange}/>
                            <input type="text" class="form-control" placeholder="r" name="optical3" onChange={this.handleChange}/>
                            <input type="text" class="form-control" placeholder="i" name="optical4" onChange={this.handleChange}/>
                            <input type="text" class="form-control" placeholder="z" name="optical5" onChange={this.handleChange}/>
                            <div className="error">{this.state.optical_e}</div>
</div>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="">Infrared</span>
                                </div>
                                <input type="text" class="form-control" placeholder="3.6" name="infrared1" onChange={this.handleChange} />
                                <input type="text" class="form-control" placeholder="4.5" name="infrared2" onChange={this.handleChange} />
                                <input type="text" class="form-control" placeholder="5.8" name="infrared3" onChange={this.handleChange} />
                                <input type="text" class="form-control" placeholder="8.0" name="infrared4" onChange={this.handleChange} />
                                <input type="text" class="form-control" placeholder="J" name="infrared5" onChange={this.handleChange} />
                                <input type="text" class="form-control" placeholder="K" name="infrared6" onChange={this.handleChange} />
                            
                            </div>
                                <div className="error">{this.state.infrared_e}</div>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="">Radio</span>
                               
                        
                                <input type="text" class="form-control" placeholder="MHz" name="radio" onChange={this.handleChange} />

                            </div>
                                <div className="error">{this.state.radio_e}</div>
                           
                            
</div>

                    </div>


{/* 
                    <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                        <InputGroup.Prepend >
                            <InputGroup.Text id="inputGroup-sizing-sm" >Optical</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name="optical1" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />  
                    </InputGroup>
                   


                    <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Optical</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name="optical2" aria-label="Small" aria-describedby="inputGroup-sizing-sm" /> <div className="error">{this.state.optical2_e}</div>
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Optical</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name="optical3" aria-label="Small" aria-describedby="inputGroup-sizing-sm" /> <div className="error">{this.state.optical3_e}</div>
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Optical</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name="optical4" aria-label="Small" aria-describedby="inputGroup-sizing-sm" /> <div className="error">{this.state.optical4_e}</div>
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Optical</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name="optical5" aria-label="Small" aria-describedby="inputGroup-sizing-sm" /> <div className="error">{this.state.optical5_e}</div>
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Infared</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name='infared1' aria-label="Small" aria-describedby="inputGroup-sizing-sm" /> <div className="error">{this.state.infared1_e}</div>
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Infared</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name='infared2' aria-label="Small" aria-describedby="inputGroup-sizing-sm" /> <div className="error">{this.state.infared2_e}</div>
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Infared</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name='infared3' aria-label="Small" aria-describedby="inputGroup-sizing-sm" /> <div className="error">{this.state.infared3_e}</div>
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Infared</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name='infared4' aria-label="Small" aria-describedby="inputGroup-sizing-sm" /> <div className="error">{this.state.infared4_e}</div>
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Infared</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name='infared5' aria-label="Small" aria-describedby="inputGroup-sizing-sm" /> <div className="error">{this.state.infared5_e}</div>
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Infared</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name='infared6' aria-label="Small" aria-describedby="inputGroup-sizing-sm" /> <div className="error">{this.state.infared6_e}</div>
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Radio</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl name='radio' aria-label="Small" aria-describedby="inputGroup-sizing-sm" /> <div className="error">{this.state.radio_e}</div>

                    </InputGroup> */}

                    <Button type="submit">Submit</Button>

                </form>
            </div>
        );
    }

}

export default input_field;

