import classes from "./Table.module.css";

const ModulePageInsights = (props) => {
    return <div className={classes.container}>
        <table className={classes.table_container}>
            <tr>
                <td>Total Viewers</td>
                <td>{props.viewers}</td>
            </tr>
            <tr>
                <td>Total Enrollments</td>
                <td>{props.enrollment}</td>
            </tr>
        </table>
    </div>;
  };
  
  export default ModulePageInsights;