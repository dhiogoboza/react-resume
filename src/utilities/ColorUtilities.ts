export class ColorUtilities {

  public static getTechClass(tech: string): string {
    switch (tech) {
      case 'Angular':
        return 'w3-aqua';
      case 'Java':
        return 'w3-purple';
      case 'CSS':
        return 'w3-deep-purple';
      case 'HTML':
        return 'w3-indigo';
      case 'JavaScript':
        return 'w3-blue';
      case 'TypeScript':
        return 'w3-light-blue';
      case 'Sass':
        return 'w3-cyan';
      case 'JUnit':
        return 'w3-green';
      case 'Mockito':
        return 'w3-light-green';
      case 'C++':
        return 'w3-black';
      case 'Catch2':
        return 'w3-deep-orange';
      case 'GoogleTest':
        return 'w3-amber';
      case 'CMake':
        return 'w3-red';
      case 'Grails':
        return 'w3-blue-gray';
      case 'Android':
        return 'w3-light-green';
      case 'Espresso':
        return 'w3-brown';
      case 'PHP':
        return 'w3-pale-yellow';
    }

    return 'w3-black';
  }
}