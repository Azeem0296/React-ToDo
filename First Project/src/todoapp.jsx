export default function TodoApp() {
    return (
        <div className="container">
            <div className="item">
                <div className="item-text">first</div>
                <button className="delete-button">Delete</button>
                <button className="update-button">Update</button>
            </div>

            <div className="item">
                <div className="item-text">second</div>  {/* Fixed closing tag */}
                <button className="delete-button">Delete</button>
                <button className="update-button">Update</button>
            </div>
        </div>
    );
}

