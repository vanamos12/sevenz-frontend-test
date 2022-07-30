<template>
    <div id="main">
        <div class="row-right">
            <div id="header">
                <h3>Take a tour</h3>
                <i class='bx bxs-notification' ></i>
                <i class='bx bxs-bell' ></i>
                <img alt="profile" src="./../assets/profile.png" />
            </div>
        </div>
        <div class="row-title">
            <h1>Update Patient Medical Record</h1>
            <h2>Click the tabs to view and edit patient medical details</h2>

            <div v-if="!data.length">Loading...</div>
            <div v-else>
                <form id="form" enctype="multipart/form-data">
                    <div class="input-list" v-for="(item, index) in data" :key="index">
                        <p>{{item.title}}</p>
                        <div class="investigations">
                            <div class="investigations-item" v-for="(iteminves, indexinves) in item.investigations" :key="'inves'+indexinves">
                                <input type="Checkbox" name="investigations[]" :value="item.id+''+iteminves.id" /> <label>{{iteminves.title}}</label>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div class="select-list"> 
                        <div class="select-box"> 
                            <label>CT Scan</label>
                            <select name="ctscan">
                                <option selected disabled>*Specify</option>
                                <option value="Scan needed in the left cerebral hemisphere">Scan needed in the left cerebral hemisphere</option>
                            </select>
                        </div>
                        <div class="select-box"> 
                            <label>MRI</label>
                            <select name="mri">
                                <option selected disabled>*Specify</option>
                                <option value="Full body MRI">Full body MRI</option>
                            </select>
                        </div>
                    </div>
                    <div class="submit-button"> 
                        <button class="btn" @click.prevent="save">Save and Send</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <PopUp 
        v-if="message != ''" 
        :message="message"
        @close="close"/>
</template>

<script>
import axiosClient from '../axios'
import store from '../store'
import PopUp from './PopUp.vue';

export default {
    components:{
        PopUp,
    },
    mounted(){
        var self=this;
        let bodyFormData = new FormData();
        bodyFormData.append('email', 'tester@kompletecare.com');
        bodyFormData.append('password', 'password');

        axiosClient.post('/login', bodyFormData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(function (response) {
            //handle success
            store.commit('setUser', response.data.data.token)

            axiosClient.get('/investigations').then((response)=>{
                console.log(response)
                self.data = response.data.data
            }).catch(error => {
                console.log(error)
            })
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    },
    methods:{
        save(){
            var self =this;
            let bodyFormData = new FormData(document.getElementById('form'))
            bodyFormData.append("developer", "Developer");
            bodyFormData.append("patient", 3);
            axiosClient.post('/investigations', bodyFormData, {
            headers: {
                //'Content-Type': 'multipart/form-data',
                //'Accept':'application/json'
                'Content-Type': 'application/json',
            }
            })
            .then(function (response) {
                console.log("post investigations success", response)
                self.message = "Data Sucessfully Registered.";
            })
            .catch(error => {
                console.log("post investigations error", error);
                self.message = "An error occured."
            })

        },
        close(){
            this.message = '';
        }
    },
    data(){
        return {
            data:[],
            message:''
        }
    }
}
</script>

<style scoped>  
#main{
    width: 900px;
    background-color: var(--bg-main-color);
    padding: 0 2rem;
    padding-bottom: 2rem;
}
.row-right{
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
#header{
    display: flex;
    align-items: center;
    gap: 2rem;
}

h3{
    color: var(--text-h3-color);
    font-size: 18px;

}

img{
    width: 50px;
    border-radius: 50%;
}

i{
    transform: scale(1.5);
}

i.bxs-bell{
    color: var(--text-h3-color);
}

i.bxs-notification{
    color: var(--bg-side-menu-color);
}

h1{
    font-size: 25px;
    font-weight: 900;
    color: var(--bg-side-menu-color);
}

h2{
    font-size: 12px;
    color: var(--text-h2-color);
}

.input-list p{
    color: var(--bg-side-menu-color);
    font-size: 17px;
    font-weight: bold;
}

#form{
    padding: 1.5rem;
    background-color: white;
}

.input-list .investigations{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    padding-bottom: 1rem;
}

.input-list .investigations label{
    font-weight: bold;
}

.submit-button{
    display: flex;
    justify-content: flex-end;
}

.submit-button .btn{
    color: white;
    background-color: var(--bg-side-menu-color);
    padding: 10px;
    font-weight: bold;
}

hr{
    margin-bottom: 1.5rem;
}

.select-list{
    display: flex;
    gap: 1rem;
    align-items: center;
    padding-bottom: 1.5rem;
}

.select-list .select-box{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    color: var(--text-side-color);
     width: 50%;
}

.select-box label{
    font-size: 13px;
}

.select-box select{
    border: 2px solid var(--text-side-color);
    padding: 0.5rem;
    padding-right: 2rem;
    color: var(--text-side-color);
    width: 100%;
    border-radius: 5px;
}

</style>