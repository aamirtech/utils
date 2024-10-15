export const GetInitials2 = (name: string) => {
  const parts = name.trim().split(/\s+/);
  return (
    (parts[0]?.[0] ?? "").toUpperCase() +
    (parts[parts.length - 1]?.[0] ?? "").toUpperCase()
  );
};
