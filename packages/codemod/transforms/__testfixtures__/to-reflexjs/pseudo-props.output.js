export default function () {
  return (
    <div>
      <a
        color="text"
        _hover={{
          color: "red",
          transform: "rotate(90deg)"
        }}
        _focus={{
          bg: "primary",
          borderWidth: "4px"
        }}>Link</a>
    </div>
  );
}