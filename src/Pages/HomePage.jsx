

function Home() {

    return (
        <div className="body">
            <div className="tile1">
                <h1 className="homeTile1" >Welcome to the TaskMaster</h1>
                <div className="tileBody1">
                    <p> all images are used without consent</p>
                </div>
                <img height="400px" src="https://wp.inews.co.uk/wp-content/uploads/2020/10/PRI_167569932-1.jpg?resize=760,507" />
            </div>
            <div className="tile2">
                <div float="left" className="tileBody2"> <h1> This App allows the simple management of tasks               </h1></div>
                <img float="right" height="400px" src="https://picsum.photos/200/300" />

            </div>
            <div className="tile1">
                <div float="left" className="tileBody1"> <h1> This App allows the simple management of tasks               </h1></div>
                <img float="right" height="400px" src="https://picsum.photos/id/1084/536/354?grayscale" />
            </div>

            <div className="tile2">
                <div float="left" className="tileBody2"> <h1> This App allows the simple management of tasks               </h1></div>
                <img float="right" height="400px" src="https://picsum.photos/seed/picsum/200/300" />

            </div>


        </div>
    )
}


export default Home;