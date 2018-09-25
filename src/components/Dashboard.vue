<template>
    <div id="dashboard">
        <h3>Dashboard</h3>
    </div>
</template>

<script>
import db from './firebaseInit'

export default {
    name: 'dashboard',
    data () {
        return {
            employees: []
        }
    },
    created () {
        console.log("hello")
        db.connection('trading_bot').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                console.log(doc)
                const data = {

                }
            })
        })
    }
}
</script>

