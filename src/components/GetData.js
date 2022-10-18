const GetData = async () => {
    const dataset = await fetch('/api/todos');
    return await dataset.json();
  }

export default GetData;
