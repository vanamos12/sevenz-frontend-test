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
</template>

<script>
import axiosClient from '../axios'
import store from '../store'

export default {
    components:{},
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
            let bodyFormData = new FormData(document.getElementById('form'))
            bodyFormData.append("developer", "Developer");
            axiosClient.post('/investigations', bodyFormData, {
            headers: {
                //'Content-Type': 'multipart/form-data',
                //'Accept':'application/json'
                'Content-Type': 'application/json',
            }
            })
            .then(function (response) {
                console.log("post investigations success", response)
            })
            .catch(error => {
                console.log("post investigations error", error);
            })

        }
    },
    data(){
        return {
            data:[],
        }
    }
}
</script>

<style scoped>  
#main{
    width: 900px;
    background-color: var(--bg-main-color);
    padding: 0 2rem;
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
</style>