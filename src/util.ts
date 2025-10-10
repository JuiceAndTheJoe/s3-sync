export function createS3cmdArgs(
  cmdArgs: string[],
  s3EndpointUrl?: string
): string[] {
  const isS3Api = cmdArgs[0] === 's3api';
  const args = [isS3Api ? 's3api' : 's3'];
  if (s3EndpointUrl) {
    args.push(`--endpoint-url=${s3EndpointUrl}`);
  }
  const finalCmdArgs = isS3Api ? cmdArgs.slice(1) : cmdArgs;
  return args.concat(finalCmdArgs);
}
