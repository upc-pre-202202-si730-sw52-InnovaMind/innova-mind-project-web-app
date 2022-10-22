<template>
    <div class="messages flex">
        <!-- In case the device is a phone with screen 600px -->
        <pv-scroll-panel class="inbox" v-if="!show && breakpoints.mobile.matches">
            <div class="messages-photos flex" v-for="(item, i) in items" :key="i" @click="show = !show">
                <pv-avatar label="H" class="mr-2 z-1" size="large" shape="circle"/>
                <div>
                    <p class="text-base">{{item.full_name}}</p>
                    <p class="text-xs">{{item.last_message}}</p>
                </div>
            </div>
        </pv-scroll-panel>

        <!-- In case the device is a phone with screen more than 600px-->
        <pv-scroll-panel class="inbox" v-else-if="!breakpoints.mobile.matches">
            <div class="messages-photos flex" v-for="(item, i) in items" :key="i" @click="show = !show">
                <pv-avatar label="H" class="mr-2 z-1" size="large" shape="circle"/>
                <div>
                    <p class="text-base">{{item.full_name}}</p>
                    <p class="text-xs">{{item.last_message}}</p>
                </div>
            </div>
        </pv-scroll-panel>

        <!-- In case the device is a phone with screen 600px -->
        <div class="chat" v-if="show && breakpoints.mobile.matches">
            <div class="header">
                <div class="flex flex-column">
                    <pv-button icon="pi pi-arrow-left" class="p-button-rounded p-button-text" @click="show = !show"/>
                    <pv-avatar label="H" class="mr-2" size="xlarge" shape="circle"/>
                </div>
                <div>
                    <p class="text-3xl">Guillermo Diaz</p>
                    <p class="text-base">Driver with AIII license</p>
                </div>
            </div>
            
            <pv-scroll-panel class="conversation">
            <div v-for="(message, i) in messages" :key="i">
                <div v-if="message.type === 'dev'" class="bubble1 text-left bg-white border-round-xl w-6 p-1 m-1">
                    <p>{{message.message}}</p>
                </div>
                <div v-if="message.type === 'comp'" class="bubble2 text-left bg-white border-round-xl w-6 ml-auto p-1 m-1">
                    <p>{{message.message}}</p>
                </div>
            </div>
            </pv-scroll-panel>

            <div class="answer">
                <pv-input-text type="text" v-model="response" style="width: calc(100% - 60px);" @keydown.enter="SendMessage()"/>
                <pv-button icon="pi pi-send" class="p-button-rounded p-button-text" @click="SendMessage()"/>
            </div>
        </div>

        <!-- In case the device is a phone with screen more than 600px-->
        <div class="chat" v-else-if="!breakpoints.mobile.matches">
            <div class="header">
                <pv-avatar label="H" class="mr-2" size="xlarge" shape="circle"/>
                <div class="">
                    <p class="text-3xl">Guillermo Diaz</p>
                    <p class="text-base">Driver with AIII license</p>
                </div>
            </div>

            <pv-scroll-panel class="conversation" scrollYRatio={0.10}>
            <div v-for="(message, i) in messages" :key="i">
                <div v-if="message.type === 'comp'" class="bubble1 text-left bg-white border-round-xl w-6 p-1 m-1">
                    <p>{{message.message}}</p>
                </div>

                <div v-if="message.type === 'dev'" class="bubble2 text-left bg-white border-round-xl w-6 ml-auto p-1 m-1">
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
import { CompaniesServices } from "../services/companies-api.services";
import useBreakpoints from "vue-next-breakpoints";

export default {
    setup() {
        const breakpoints = useBreakpoints({
            mobile: 600,
            desktop: [601]
        });
        return {
            breakpoints
        };
    },
    data() {
        return {
            items: [],
            messages: [],
            response: "",
            show: true
        };
    },
    created() {
        this.service = new CompaniesServices();
        this.service.GetContacts().then(response => {
            this.items = response.data;
        });

        this.GetMessages();
        this.breakpoints.mobile.on("enter", (mq) => {
            console.log("Entered mobile breakpoint");
            console.log("Media Query", mq);
        });
 
        this.breakpoints.mobile.on("leave", (mq) => {
            console.log("Left mobile breakpoint");
            console.log("Media Query", mq);
        });
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
                "type": "comp",
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

}

.inbox {
    width: 100%;
}

.messages-photos {
    background-color: #b0f2c298;
    border-radius: 0.75rem;
    margin: 0.5rem;
    padding: 0rem 0.5rem;
    align-items: center;
}

.messages-photos:hover {
    background-color: rgba(245, 245, 245, 0.219);
}

.chat{
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

.bubble1{
    outline: solid 1px red;
}

.bubble2{
    outline: solid 1px blue;
}

@media (min-width: 601px) {
    .inbox {
        min-width: 250px;
        max-width: 300px;
        height: calc(100vh - 15px);
    }

    .messages-photos {
        background-color: #b0f2c298;
        border-radius: 0.75rem;
        margin: 0.5rem;
        padding: 0rem 0.5rem;
        align-items: center;
    }
}
</style>