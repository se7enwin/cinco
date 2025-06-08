import Card from '../Card/Card'
export default function Cards(props) {


    const { saint } = props;
    console.log('Desde Cards: ', saint[0])
    return (

        <div id='Cards'>
            {

                saint?.map(a =>
                    //Card's render- Attach attributes 
                    <Card

                        name={a.name}
                        image={a.image}
                        rank={a.rank}
                        techniques={a.techniques}
                        constellation={a.constellation}


                    />

                )

            }    </div>



    )

}