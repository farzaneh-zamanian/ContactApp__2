import Skeleton from "react-loading-skeleton";
function Loading() {
  
  return Array(10)
    .fill({})
    .map(() => {
      return (
        <div
          key={Math.random()}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 15,
            borderBottom: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div style={{ display: "flex", flexDirection:"column", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Skeleton
                circle={true}
                height={45}
                width={45}
                style={{ marginRight: 10 }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                {/* Name */}
                <Skeleton height={15} width={100} style={{ marginBottom: 5 }} />
                {/* Email */}
                <Skeleton height={15} width={150} style={{ marginBottom: 5 }} />
              </div>
            </div>
            <div>
              {/* Phone Number */}
              <Skeleton height={30} width={200} style={{ marginTop: 10 }} />
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            {/* Edit button */}
            <Skeleton
              width={45}
              height={35}
              style={{ marginRight: 10, borderRadius: 5 }}
            />
            {/* Delete button */}
            <Skeleton
              width={45}
              height={35}
              style={{ marginRight: 10, borderRadius: 5 }}
            />
            {/* Favorite button */}
            <Skeleton width={45} height={35} style={{ borderRadius: 5 }} />
          </div>
        </div>
      );
    });
}

export default Loading;
