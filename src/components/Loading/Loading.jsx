import Skeleton from "react-loading-skeleton";
function Loading() {
  return Array(5)
    .fill({})
    .map(() => {
      return (
        <div
          key={Math.random()}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 25,
            borderBottom: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Skeleton
              circle={true}
              height={40}
              width={40}
              style={{ marginRight: 10 }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Skeleton height={15} width={100} style={{ marginBottom: 5 }} />
              {/* name */}
              <Skeleton height={15} width={150} style={{ marginBottom: 5 }} />
              {/* email */}
              <Skeleton height={15} width={100} style={{ marginBottom: 5 }} />
              {/* phone number */}
            </div>
          </div>
          <div style={{ display: "flex", alignItems:"center" }}>
            <Skeleton
              width={45}
              height={35}
              style={{ marginRight: 10, borderRadius: 5 }}
            />
            {/* Edit button */}
            <Skeleton
              width={45}
              height={35}
              style={{ marginRight: 10, borderRadius: 5 }}
            />
            {/* Delete button */}
            <Skeleton width={45} height={35} style={{ borderRadius: 5 }} />
            {/* Favorite button */}
          </div>
        </div>
      );
    });
}

export default Loading;
