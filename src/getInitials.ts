export const GetInitials = (name: string) => {
  const parts = name.trim().replace("-", " ").replace("_", " ").split(/\s+/);
  return (
    (parts[0]?.[0] ?? "").toUpperCase() +
    (parts[parts.length - 1]?.[0] ?? "").toUpperCase()
  );
};

console.log(GetInitials("Aamir O'Khan"));
