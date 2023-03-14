const Sidebar = () => {
  return (
    <div className="col-md-4">
      <div className="content-section">
        <h3>Blog Sidebar</h3>
        <div className="text-muted mb-2">
          Explore activites and interact with the community or look for info
          <ul className="list-group mt-2">
            <li className="list-group-item list-group-item-light">
              Latest Posts
            </li>
            <li className="list-group-item list-group-item-light">
              Announcements
            </li>
            <li className="list-group-item list-group-item-light">FAQ</li>
            <li className="list-group-item list-group-item-light">Events</li>
            <li className="list-group-item list-group-item-light">Mods</li>
            <li className="list-group-item list-group-item-light">Top Users</li>
            <li className="list-group-item list-group-item-light">Donations</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
