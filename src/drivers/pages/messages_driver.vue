<template>
    <div class="messages flex">
        <pv-scroll-panel class="inbox">
            <div class="messages-photos flex" v-for="(item, i) in items" :key="i">
                <pv-avatar label="H" class="mr-2 z-1" size="large" shape="circle"/>
                <div class="">
                    <p class="text-base">{{item.full_name}}</p>
                    <p class="text-xs">{{item.last_message}}</p>
                </div>
            </div>
        </pv-scroll-panel>

        <div class="chat">
            <div class="header">
                <pv-avatar label="H" class="mr-2" size="xlarge" shape="circle"/>
                <div class="">
                    <p class="text-3xl">Henry Turrones</p>
                    <p class="text-base">Maconsa Group recluter</p>
                </div>
            </div>

            <pv-scroll-panel class="conversation">

            <div v-for="(message, i) in messages" :key="i">
                <div v-if="message.type === 'comp'" class="burbuja1 text-left bg-white border-round-xl w-6 p-1 m-1">
                    <p>{{message.message}}</p>
                </div>

                <div v-if="message.type === 'dev'" class="burbuja2 text-left bg-white border-round-xl w-6 ml-auto p-1 m-1">
                    <p>{{message.message}}</p>
                </div>
            </div>

            </pv-scroll-panel>

            <div class="answer">
                <pv-input-text type="text" v-model="response" style="width: calc(100% - 60px);" @keydown.enter="SendMessage()"/>
                <pv-button icon="pi pi-send" class="p-button-rounded p-button-text" @click="SendMessage()"/>
            </div>

        </div>
    </div>
</template>

<script>
import { DriversServices } from "../services/drivers-api.services";

export default {
    data() {
        return {
            items: [],
            messages: [],
            response: "",
        };
    },
    created() {
        this.service = new DriversServices();
        this.service.GetContacts().then(response => {
            this.items = response.data;
        });

        this.GetMessages();
    },
    methods: {
        GetMessages(){
            this.service.GetMessages().then(response => {
                this.messages = response.data;
                console.log(this.messages);
            });
        },

        SendMessage() {
            let TempAnswer= {
                "id":0,
                "type": "dev",
                "message": this.response
            }

            this.service.SendMessage(TempAnswer).then(response => {                
                this.messages.push(response.data);
            });

            this.response = "";
        }
    }
};
</script>

<style scope>
.messages {
    width: calc(100vw - 600px);
}

.inbox {
    height: calc(100vh - 30px);
}

.messages-photos {
    background-color: #b0f2c298;
    border-radius: 0.75rem;
    margin: 0.5rem;
    align-items: center;
    justify-content: center;
}

.chat{
    width: 75%;
}

.header{
    background-color: #CBE0FF;
    border-radius: 0.75rem;
    padding: 0rem 1rem;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.conversation{
    height: calc(100vh - 250px);
    background-color: #CBE0FF;
    border-radius: 0.75rem;
    padding: 1rem;
}

.answer{
    max-height: 53px;
    height: 53px;
    margin: 1rem;
}

.burbuja1{
    outline: solid 1px red;
}

.burbuja2{
    outline: solid 1px blue;
}
</style>