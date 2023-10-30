function App () {
    return (
        <div>
            <Tweet
              name="Dan gonzalez"
              username="dannyboi"
              date={new Date().toDateString()}
              message="Dan wuz heere"
            />
            <Tweet
              name="Rebecca Sanders"
              username="beckyyys"
              date={new Date().toDateString()}
              message="All your base are belong to us"
            />
        </div>
    );
}