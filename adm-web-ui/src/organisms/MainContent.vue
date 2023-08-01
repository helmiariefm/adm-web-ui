<script>
    import Button from '../atoms/Button.vue';
    import DataCard from '../molecules/DataCard.vue';

    export default{
        components:{
            Button,
            DataCard
        }
    }
</script>

<template>
    <main class="w-full h-full pb-9">
        <div class='bg-white border md:mx-11 mx-1 my-7 p-5 rounded-md'>
            <div class='flex justify-between'>
                <div>
                    <h1 class='text-xl font-semibold'>DASHBOARD</h1>
                    <sup>These compenies have a dahsboard</sup>
                </div>
                <Button label="Import Data" icon="upload" class='border border-[#32ae1e] text-[#32ae1e] hover:bg-[#32ae1e] hover:text-white h-9 px-2 self-center'/>                
            </div>
            <hr class='my-5 border-t-2'/>
            <div class='gap-4 grid grid-cols-2 md:flex md:gap-4'>
                <Button label="12 Months" type="filter"/>
                <Button label="6 Months" type="filter"/>
                <Button label="5 Months" type="filter"/>
                <Button label="4 Months" type="filter"/>
                <Button label="3 Months" type="filter"/>
                <Button label="2 Months" type="filter"/>
            </div>
            <div class='md:grid md:grid-cols-4 md:gap-4 my-5'>
                <DataCard title='Vendors/Suppliers' value='200.000' trend='v' trendText='Last Month' trendColor='red' />
                <DataCard title='Customer/Dealer' value='300.000' trend='^' trendText='Last Month' trendColor='green' />
                <DataCard title='Product SKU' value='300' trend='^' trendText='Last Month' trendColor='green' />
                <DataCard title='Purchase Order' value='21' trend='v' trendText='Last Month' trendColor='red' />
                <DataCard title='Sales Order' value='64' trend='v' trendText='Last Month' trendColor='red' />
                <DataCard title='Grinds' value='1.666.664' trend='^' trendText='Last Month' trendColor='green' />
                <DataCard title='Manuals' value='64' trend='v' trendText='Last Month' trendColor='red' />
                <DataCard title='Vert Transfers' value='2.001' trend='^' trendText='Last Month' trendColor='green' />
            </div>
        </div>

        <div class='md:flex md:mx-11'>
            <div class='bg-white border md:w-7/12 md:mr-3 md:mx-0 mb-3 md:mb-0 mx-1 p-5 rounded-md'>
                <h1>Aging - Account Receivable</h1>
                <img src='https://www.bbc.co.uk/staticarchive/8edd9e8871fc1723ec0051126b5e986b9d45457b.gif' class='mt-7'/>
            </div>
            <div class='bg-white border md:w-5/12 md:ml-3 md:mx-0 mx-1 p-5 rounded-md' alt='grpahic-here'>
                <h1>Revenue</h1>
                <img src='https://www.amcharts.com/wp-content/uploads/2013/11/demo_129_none-1.png' alt='grpahic-here' class='my-11'/>
            </div>
        </div>
    </main>
</template>